export const funemoji =[
"🪄", "⚡", "🦉", "🐍", "🦁", "🦡", "🦅", "🧙", "🧙‍♀️", "🧙‍♂️",
"📜", "🏰", "🔮", "✨", "🌌", "🕯️", "🪶", "🧪", "🗝️", "🪆",
"🧹", "🦄", "🦇", "🌙", "🕸️", "🐾", "🔥", "🍵", "🥀", "🪷",
"🎩", "🍄", "📖", "🧿", "🕰️", "🧊", "🐉", "🪓", "🗡️", "🛡️",
"🐾", "🦡", "🌟", "🦜", "🕷️", "🧝‍♀️", "🧝‍♂️", "🐀", "🦢", "🪄",
]
export const getrandomemoji=()=>{
return funemoji[Math.floor(Math.random() * funemoji.length)]
};
