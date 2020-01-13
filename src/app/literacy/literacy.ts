export class LiteracyResponse {
    /**
     *
     */
    constructor(
        public _s_no_: string,
        public name_of_states_uts: string,
        public literacy_rate___persons: number,
        public literacy_rate___male: number,
        public literacy_rate___female: number
    ) {}
}

export class Literacy {
    constructor(
        public srNo: string,
        public nameOfStatesUts: string,
        public literacyRatePersons: number,
        public literacyRateMale: number,
        public literacyRateFemale: number
    ) {}
}
