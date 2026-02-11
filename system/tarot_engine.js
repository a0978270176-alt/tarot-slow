import { enforceLanguage } from "./language_guard.js";

const constitution = {
    language_rules: {
        hard_block_keywords: [
            "you will",
            "must",
            "inevitable",
            "guaranteed",
            "destined",
            "correct decision",
            "best choice"
        ],
        soft_replace: {
            "should": "可以考慮",
            "need to": "也許可以探索",
            "better to": "或許能思考"
        }
    }
};

const cards = [
    {
        id: "THE_FOOL",
        name: "愚者",
        symbolism: "新的開始與未知的可能",
        themes: ["風險", "純真", "冒險"],
        reflection_prompt: "你是否正站在某個新的起點？"
    },
    {
        id: "THE_HERMIT",
        name: "隱者",
        symbolism: "內省與獨處",
        themes: ["沉思", "退一步", "內在指引"],
        reflection_prompt: "如果暫時放慢腳步，會看見什麼？"
    }
];

export function drawRandomCard() {
    return cards[Math.floor(Math.random() * cards.length)];
}

export function generateInterpretation(card) {
    let text = `
【${card.name}】

象徵：${card.symbolism}
主題：${card.themes.join("、")}

${card.reflection_prompt}
`;

    return enforceLanguage(text, constitution);
}
