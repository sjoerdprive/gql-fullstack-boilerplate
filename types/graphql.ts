
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface RepositoryProperty {
    type?: Nullable<string>;
    uuid?: Nullable<string>;
}

export interface Book {
    title?: Nullable<string>;
    author?: Nullable<Author>;
}

export interface Author {
    name?: Nullable<string>;
    books?: Nullable<Nullable<Book>[]>;
}

export interface Commit {
    type?: Nullable<string>;
    hash?: Nullable<string>;
    date?: Nullable<string>;
    message?: Nullable<string>;
}

export interface Repository {
    type?: Nullable<string>;
    full_name?: Nullable<string>;
    name?: Nullable<string>;
    slug?: Nullable<string>;
    description?: Nullable<string>;
    scm?: Nullable<string>;
    owner?: Nullable<RepositoryProperty>;
    workspace?: Nullable<RepositoryProperty>;
    is_private?: Nullable<boolean>;
    project?: Nullable<RepositoryProperty>;
    fork_policy?: Nullable<string>;
    created_on?: Nullable<string>;
    updated_on?: Nullable<string>;
    size?: Nullable<number>;
    language?: Nullable<string>;
    has_issues?: Nullable<boolean>;
    has_wiki?: Nullable<boolean>;
    uuid?: Nullable<string>;
}

export interface IQuery {
    author(id: string): Author | Promise<Author>;
    commit(repository: string): Nullable<Commit> | Promise<Nullable<Commit>>;
}

type Nullable<T> = T | null;
