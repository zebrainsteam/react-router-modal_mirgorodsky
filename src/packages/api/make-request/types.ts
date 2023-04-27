let requestTypes: 'get' | 'post' | 'put' | 'patch' | 'delete'

export interface MakeRequestProps<P extends object = {}> {
    url: string
    method?: typeof requestTypes
    data?: P
    [key: string]: any
}