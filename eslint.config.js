import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    vue: true,
    typescript: false
  }
})
  .append({
    ignores: [
      // Dependencies
      'node_modules/',

      // Build outputs
      '.nuxt/',
      '.output/',
      'dist/',

      // Generated files
      '.nitro/',
      '.cache/',

      // Static assets
      'public/',
      'static/',

      // Temporary files
      '*.tmp',
      '*.temp',
      '*.log'
    ],
    languageOptions: {
      globals: {
        // Nuxt auto-imports
        useSeoMeta: 'readonly',
        useWindowSize: 'readonly',
        useWindowScroll: 'readonly',
        useUtils: 'readonly',
        useNavigation: 'readonly',
        // Vue auto-imports
        ref: 'readonly',
        reactive: 'readonly',
        computed: 'readonly',
        watch: 'readonly',
        onMounted: 'readonly',
        onBeforeUnmount: 'readonly',
        nextTick: 'readonly'
      }
    },
    rules: {
      // Vue/Nuxt specific rules
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/first-attribute-linebreak': 'off',
      'vue/attributes-order': 'off',

      // General JavaScript rules
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^(props|emit|slots|attrs)$'
      }],
      'prefer-const': 'error',

      // Code style - be more flexible
      'indent': ['error', 2, { SwitchCase: 1 }],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'comma-dangle': 'off', // Turn off for now, common in Vue

      // Best practices
      'no-var': 'error',
      'no-duplicate-imports': 'error',
      'no-unreachable': 'error',

      // Vue specific best practices
      'vue/require-v-for-key': 'error',
      'vue/no-unused-components': 'warn',
      'vue/require-prop-types': 'warn',
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/html-self-closing': 'off' // Turn off for now
    }
  })
