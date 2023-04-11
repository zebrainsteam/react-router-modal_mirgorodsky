export type UseToggle = (initialState?: boolean) => [boolean, () => void, (newState: boolean) => void]

export type usePrepareLinkProps = {
    to?: string,
    isRelativePath?: boolean,
    query?: object,
    pushToQuery?: object,
    hash?: string,
    keepOldQuery?: boolean,
    state?: object
}

export type UsePrepareLink = (props: usePrepareLinkProps) => {
    pathname: string,
    search: string,
    hash: string,
    state?: object,
};