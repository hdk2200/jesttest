// util.test.js
const { toHalfWidth } = require('../source/util');

test('converts full-width numbers to half-width', () => {
    expect(toHalfWidth('１２３４５')).toBe('12345');
});

test('converts full-width comma to half-width', () => {
    expect(toHalfWidth('１，２３４')).toBe('1,234');
});

test('converts full-width minus sign to half-width', () => {
    expect(toHalfWidth('－１２３')).toBe('-123');
});

test('converts full-width space to half-width space', () => {
    expect(toHalfWidth('　Test')).toBe(' Test');
});

test('returns the original string if there are no full-width characters', () => {
    expect(toHalfWidth('12345')).toBe('12345');
});


test('converts various minus-like characters to half-width minus', () => {
    expect(toHalfWidth('－１２３')).toBe('-123'); // 全角マイナス
    expect(toHalfWidth('−１２３')).toBe('-123'); // 長音記号
    expect(toHalfWidth('—１２３')).toBe('-123'); // エムダッシュ
    expect(toHalfWidth('ー１２３')).toBe('-123'); // カタカナ長音
    expect(toHalfWidth('➖１２３')).toBe('-123'); // その他のマイナス記号
});


test('converts full-width date and time characters to half-width', () => {
    expect(toHalfWidth('２０２４／０１／０１')).toBe('2024/01/01'); // 日付
    expect(toHalfWidth('１２：３４')).toBe('12:34'); // 時刻
    expect(toHalfWidth('２０２４／０１／０１　１２：３４')).toBe('2024/01/01 12:34'); // 日付と時刻の組み合わせ
});