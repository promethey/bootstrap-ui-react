import { test, expect, describe } from '@jest/globals';
import { getBootstrapClassNames } from '../scripts/convert';

describe('basis test suite', () => {
  test('display inline', () => {
    expect(getBootstrapClassNames('d', 'inline')).toBe('d-inline');
  });

  test('display block', () => {
    expect(getBootstrapClassNames('d', 'block')).toBe('d-block');
  });

  test('display inline-block', () => {
    expect(getBootstrapClassNames('d', 'inline-block')).toBe('d-inline-block');
  });

  test('display xs-block', () => {
    expect(getBootstrapClassNames('d', { xs: 'block', lg: 'flex' }))
      .toEqual('d-block d-lg-flex');
  });

  test('display md-flex', () => {
    expect(getBootstrapClassNames('d', { md: 'flex' }))
      .toEqual('d-md-flex');
  });

  test('display full responsive', () => {
    expect(getBootstrapClassNames('d', {
      xs: 'none',
      sm: 'flex',
      md: 'flex',
      lg: 'block',
      xl: 'flex',
      xxl: 'inline',
    })).toEqual('d-none d-sm-flex d-md-flex d-lg-block d-xl-flex d-xxl-inline');
  });

  test('return null if params is empty', () => {
    expect(getBootstrapClassNames()).toBeNull();
  });

  test('return null if classnames is false', () => {
    expect(getBootstrapClassNames('active', false)).toBeNull();
  });

  test('return only prefix if classnames is true', () => {
    expect(getBootstrapClassNames('disabled', true)).toBe('disabled');
  });
});
