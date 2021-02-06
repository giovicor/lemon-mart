export abstract class CacheService {
  protected getItem<T>(key: string): T | string | null {
    const data = localStorage.getItem(key)

    if (data != null) {
      if (this.isJson(data)) {
        // console.log('getItem - key: ' + key + ' data IS JSON')
        return JSON.parse(data)
      } else {
        // console.log('getItem - key: ' + key + ' data IS NOT JSON')
        return data
      }
    }

    return null
  }

  protected setItem(key: string, data: object | string): void {
    if (typeof data === 'string') {
      localStorage.setItem(key, data)
    } else {
      localStorage.setItem(key, JSON.stringify(data))
    }
  }

  protected removeItem(key: string): void {
    localStorage.removeItem(key)
  }

  protected clear(): void {
    localStorage.clear()
  }

  private isJson(str: string): boolean {
    try {
      JSON.parse(str)
    } catch (e) {
      return false
    }
    return true
  }
}
