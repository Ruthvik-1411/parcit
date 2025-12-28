import { Schema } from 'firebase/ai';

export const resultSchema = Schema.object({
    properties  : {
        title: Schema.string(),
        description: Schema.string(),
        tags: Schema.array({
            items: Schema.string(),
            maxItems: 5
        })
    }
});
