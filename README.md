react-version-input
============================================
版本号输入框

## Dev

```
npm install
npm run dev
```

## Test

```
npm test
```

## Notic
1、`value`默认为英文句号分割的字符串, eg. `1.0.1`;

2、配合 Ant Design Form表单使用时，可自定义验证逻辑，例如：

```
  const versionValidator = () => {
    const form = (formRef as any).current.getFieldsValue();
    if (!form.version) {
      return Promise.reject('版本号不能为空!');
    }
    const isEmpty = form.version.split('.').some(it => it.length === 0);
    if (isEmpty) {
      return Promise.reject('版本号格式不正确');
    }
    return Promise.resolve();
  }
```
