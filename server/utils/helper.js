export const makeMessage = (from, text) => ({
from,
text,
createdAt: new Date().toLocaleTimeString('en-US')
});