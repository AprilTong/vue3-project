module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:vue/essential', 'airbnb-base'],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        // 关闭缩进提示，pretieer设置了缩进为4
        'no-tabs': 0,
        'no-mixed-spaces-and-tabs': 0,
        indent: ['off', 'tab'],
        'no-trailing-spaces': 0,
        // 不需要在每个语句的末尾使用分号
        semi: 'never',
        // 关闭对别名的审查
        'import/no-unresolved': 'off',
        // 关闭内置模块检查
        'import/no-extraneous-dependencies': 'off',
        //
    },
}
