const Employee = require('../lib/Employee');
const employee = new Employee('lydia', '123', 'lydia@gmail.com')

describe('employee', () => {
    it('should return an object from constructor', () => {
      expect(employee.name).toBe("lydia");
      expect(employee.id).toBe("123");
      expect(employee.email).toBe("lydia@gmail.com");
    });
});

describe('getName()', () => {
    it('should get the name from this method', () => {
      expect(employee.getName()).toBe('lydia')
    });
});

describe('getId()', () => {
    it('should get the id from this method', () => {
      expect(employee.getId()).toBe('123')
    });
});

describe('getEmail()', () => {
    it('should get the email from this method', () => {
      expect(employee.getEmail()).toBe('lydia@gmail.com')
    });
});

describe('getRole()', () => {
    it('should get the role from this method', () => {
      expect(employee.getRole()).toBe('Employee')
    });
});