export function enforceLanguage(text, constitution) {
    const rules = constitution.language_rules;

    for (let word of rules.hard_block_keywords) {
        if (text.toLowerCase().includes(word)) {
            return "This interpretation has been softened to maintain symbolic openness.";
        }
    }

    for (let key in rules.soft_replace) {
        const regex = new RegExp(key, "gi");
        text = text.replace(regex, rules.soft_replace[key]);
    }

    return text;
}
