/**
 * Organizations list
 */
export type OrganizationsList = Array<Organization>;

/**
 * Organization
 */
export interface Organization {
    /**
     * [UNIQUE] Identifier of the organization
     */
    organizationUuid: string;
    /**
     * Level of subordination of organizations:
     * -1 — for use in filters, such as "All organizations"
     * 1 — for managing organizations
     * 2...N — for all aditionals
     */
    level: number;
    /**
     * [UNIQUE] Short organization name
     */
    shortName: string;
    /**
     * Full organization name
     */
    legalName: string;
    /**
     * Organization registration address
     */
    legalAddress: string;
    /**
     * Actual, post address
     */
    postAddress: string;
    /**
     * Organization form of company:
     * — SP
     * — Legal entity
     */
    orgForm: string;
    /**
     * [UNIQUE] Organization INN
     */
    inn: string;
    /**
     * Is organization managing attribute
     */
    isMain: 0 | 1;
    /**
     * Organization status:
     * — Managing
     * — Additional
     */
    orgState: string;
    /**
     * Is organization deleted attribute
     */
    deleted: 0 | 1;
    /**
     * Is organization deleted string attribute
     */
    deletedStr: string;
    /**
     * Creation date in software (not in the tax)
     */
    creationDate: string;
    /**
     * Identifier of parent organization
     */
    parentOrgUuid: string | null;
    /**
     * Short name of parent organization
     */
    parentOrgName: string | null;
    /**
     * Phone number of organization
     */
    phoneNumber: string;
    /**
     * [UNIQUE] Identifier of the organization when integrated with 1C
     */
    orgID: string | null;
    /**
     * [UNIQUE] Identifier of organization when integrated with external systems
     */
    externalId: string | null;
}

/**
 * Add organization params
 */
export interface AddOrganizationParams {
    /**
     * [UNIQUE] Short organization name
     */
    shortName: string;
    /**
     * Full organization name
     */
    legalName: string;
    /**
     * [UNIQUE] Organization INN
     */
    inn: string;
    /**
     * Organization registration address
     */
    legalAddress: string;
    /**
     * Phone number of organization
     */
    phoneNumber: string;
    /**
     * Identifier of parent organization
     */
    parentOrgUuid?: string;
}

/**
 * Edit organization params
 */
export interface EditOrganiationParams extends AddOrganizationParams {
    organizationUuid: string;
}
