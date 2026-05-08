/**
 * @format
 */

import {formatCNPJ, formatCEP, formatPhone, removeFormatting} from '../src/utils/formatters';

describe('Formatters', () => {
  describe('formatCNPJ', () => {
    it('should format CNPJ correctly', () => {
      expect(formatCNPJ('00000000000000')).toBe('00.000.000/0000-00');
      expect(formatCNPJ('123456789012')).toBe('12.345.678/9012');
      expect(formatCNPJ('1234')).toBe('12.34');
      expect(formatCNPJ('')).toBe('');
    });

    it('should ignore non-digit characters', () => {
      expect(formatCNPJ('00.000.000/0000-00')).toBe('00.000.000/0000-00');
      expect(formatCNPJ('00 000 000 0000 00')).toBe('00.000.000/0000-00');
    });
  });

  describe('formatCEP', () => {
    it('should format CEP correctly', () => {
      expect(formatCEP('00000000')).toBe('00000-000');
      expect(formatCEP('12345')).toBe('12345');
      expect(formatCEP('123456')).toBe('12345-6');
      expect(formatCEP('')).toBe('');
    });

    it('should ignore non-digit characters', () => {
      expect(formatCEP('00000-000')).toBe('00000-000');
      expect(formatCEP('00 000 000')).toBe('00000-000');
    });
  });

  describe('formatPhone', () => {
    it('should format phone correctly', () => {
      expect(formatPhone('1199999999')).toBe('(11) 9999-9999');
      expect(formatPhone('11')).toBe('(11');
      expect(formatPhone('1199')).toBe('(11) 99');
      expect(formatPhone('')).toBe('');
    });

    it('should handle 10-digit phones', () => {
      expect(formatPhone('1133334444')).toBe('(11) 3333-4444');
    });

    it('should ignore non-digit characters', () => {
      expect(formatPhone('(11) 9999-9999')).toBe('(11) 9999-9999');
      expect(formatPhone('(11) 99999-9999')).toBe('(11) 99999-9999');
    });
  });

  describe('removeFormatting', () => {
    it('should remove all formatting', () => {
      expect(removeFormatting('00.000.000/0000-00')).toBe('00000000000000');
      expect(removeFormatting('00000-000')).toBe('00000000');
      expect(removeFormatting('(11) 9999-9999')).toBe('1199999999');
    });
  });
});

