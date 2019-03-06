export class ConfigReader {
    constructor(config) {
        this.config = config;
    }
    dimensionsForSlug(slug) {
        const { scenarios } = this.config;
        for (const scenario of scenarios) {
            if (scenario.slug === slug) {
                return scenario.dimensions;
            }
        }
        return { width: 0, height: 0 };
    }
}
//# sourceMappingURL=config-reader.js.map