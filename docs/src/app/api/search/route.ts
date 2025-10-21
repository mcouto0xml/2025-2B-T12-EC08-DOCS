import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";
import { stemmer, language } from "@orama/stemmers/portuguese";

// statically cached
export const revalidate = false;
export const { staticGET: GET } = createFromSource(source, {
	tokenizer: {
		stemming: true,
		stemmer,
		language,
	},
});
