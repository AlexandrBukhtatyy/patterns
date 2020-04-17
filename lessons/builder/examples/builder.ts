interface Query {
    getQueryString: () => string;
}

interface QueryBuilder<T> {
    createQuery: () => void;
    select: (fields?: string[]) => QueryBuilder<T>;
    where: (condition: string) => QueryBuilder<T>;
    orderBy: (field: string, order: string) => QueryBuilder<T>;
    getQuery: () => T;
}

class MySQLQuery implements Query{
    private select: string;
    private where: string;
    private orderBy: string;
    public setSelect(select: string): void {
        this.select = select;
    }
    public setWhere(where: string): void {
        this.where = where;
    }
    public setOrderBy(field: string, order: string = ''): void {
        this.orderBy = `${field} ${order ? order : ''}`;
    }
    getQueryString(): string {
        return `${this.select ? 'SELECT ' + this.select : 'SELECT *'} ${this.where ? 'WHERE ' + this.where : ''} ${this.orderBy ? 'ORDER BY ' + this.orderBy : ''}`;
    }
}

class MySQLQueryBuilder implements QueryBuilder<MySQLQuery>{
    private query: MySQLQuery;

    public createQuery(): void {
      this.query = new MySQLQuery();
    }

    public select(fields: string[] = []): void {
        this.query.setSelect(fields.join(','));
    }

    public where(condition: string): void {
        this.query.setWhere(condition);
    }

    public orderBy(field: string, order: string): void {
        this.query.setOrderBy(field, order);
    }

    public getQuery ():MySQLQuery {
        return this.query;
    }
}

class PostgreSQLQuery implements Query {
    private select: string;
    private where: string;
    private orderBy: string;
    public setSelect(select: string): void {
        this.select = select;
    }
    public setWhere(where: string): void {
        this.where = where;
    }
    public setOrderBy(field: string, order: string = ''): void {
        this.orderBy = `${field} ${order ? order : ''}`;
    }
    getQueryString(): string {
        return `${this.select ? 'SELECT ' + this.select : 'SELECT *'} ${this.where ? 'WHERE ' + this.where : ''} ${this.orderBy ? 'ORDER BY ' + this.orderBy : ''}`;
    }
}

class PostgreSQLQueryBuilder implements QueryBuilder<PostgreSQLQuery>{
    private query: PostgreSQLQuery;

    public createQuery(): void {
        this.query = new PostgreSQLQuery();
    }

    public select(fields: string[] = []): void {
        this.query.setSelect(fields.join(','));
    }

    public where(condition: string): void {
        this.query.setWhere(condition);
    }

    public orderBy(field: string, order: string): void {
        this.query.setOrderBy(field, order);
    }

    public getQuery ():PostgreSQLQuery {
        return this.query;
    }
}

class QueryManager {
    private queryBuilder: QueryBuilder<Query>

    public setBuilder(queryBuilder: QueryBuilder<Query>): void {
        this.queryBuilder = queryBuilder;
    }

    public getRowByID(id: number): Query {
        this.queryBuilder.select();
        this.queryBuilder.where(`id = ${id}`);
        return this.queryBuilder.getQuery();
    }

    public getRowsWhere(condition: string): Query {
        this.queryBuilder.select();
        this.queryBuilder.where(condition);
        return this.queryBuilder.getQuery();
    }


}


/********************** Использование **********************/

const queryBuilder: QueryBuilder<Query> = new MySQLQueryBuilder();
const queryManager: QueryManager = new QueryManager();

queryManager.setBuilder(queryBuilder);

const rowByIDQuery: Query = queryManager.getRowByID(10);
const rowsWhereQuery: Query = queryManager.getRowsWhere('id < 10');

// db.execute(rowByIDQuery)
// db.execute(rowsWhereQuery)
