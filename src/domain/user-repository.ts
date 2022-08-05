export interface userRepositoryFactory {
    create(): number;
    retrieve(): number;
    update(): number;
    delete(): void;
}
