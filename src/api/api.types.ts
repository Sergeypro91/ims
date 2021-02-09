import { AxiosResponse } from 'axios';

/**
 * API default GET params for all lists
 */
export interface APIGetListParams {
    /**
     * [DEFAULT]: 'simple' — for get all data at once
     * 'paged' — for pagination mode
     */
    mode?: 'simple' | 'paged';
    /**
     * Fields to sort by, comma separated, order is important
     */
    sort?: string;
    /**
     * Fields to filter by, comma separated, order is important
     */
    filter?: string;
    /**
     * [PAGED MODE] Number of records per pare
     * [DEFAULT]: 25
     */
    limit?: number;
    /**
     * [PAGED MODE] Page number
     * [DEFAULT]: 1
     */
    page?: number;
}

/**
 * API response default object
 */
export type APIResponse<P = any> = AxiosResponse<{
    /**
     * Operation result:
     * -1 — undefined
     * 0 — success
     * 1 — error
     */
    code: number;
    /**
     * Result message
     */
    message: string;
    /**
     * Payload
     */
    payload?: P;
}>;

/**
 * API GET Entity response
 */
export type APIEntityResponse<D = any> = APIResponse<{
    /**
     * Data
     */
    data: D;
}>;

/**
 * API GET list response object
 */
export type APIListResponse<D = any> = APIResponse<{
    /**
     * Entity that includes information for pagination
     */
    pager?: {
        /**
         * Current page number
         */
        page: number;
        /**
         * Total pages count
         */
        totalPages: number;
        /**
         * Number of records per page
         */
        pageSize: number;
    };
    /**
     * Data
     */
    data: D;
}>;

/**
 * Action status
 */
export interface ActionStatus {
    successful: boolean;
    rowUuid: string;
}
