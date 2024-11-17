export namespace MoviesTypes {

    type MetaData = {
        page: number;
    }

    export type APIResponseResult<T, OPTIONAL = unknown> = {
        data: T
        meta: MetaData
    } & OPTIONAL
}