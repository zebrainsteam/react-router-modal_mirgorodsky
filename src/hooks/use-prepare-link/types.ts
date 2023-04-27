export type usePrepareLinkProps = {
    to?: string,
    isRelativePath?: boolean,
    query?: object,
    pushToQuery?: object,
    hash?: string,
    keepOldQuery?: boolean,
    state?: object
}

export type UsePrepareLink = (props: usePrepareLinkProps) => [{
    pathname: string,
    search: string,
    hash: string,
    state?: object,
}, () => void];