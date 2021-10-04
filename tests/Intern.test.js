const Intern = require('../lib/Intern');
const intern = new manager('lydia','123', 'lydia@gmail.com', 'Ohio University')

describe('employee', () => {
    it('should return an object from constructor', () => {
      expect(employee.name).toBe("lydia");
      expect(employee.id).toBe("123");
      expect(employee.email).toBe("lydia@gmail.com");
      expect(employee.officeNumber).toBe("5137777777");
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

describe('getSchool()', () => {
    it('should get the school name from this method', () => {
      expect(employee.getSchool()).toBe('Ohio University')
    });
});

describe('getRole()', () => {
    it('should get the role from this method', () => {
      expect(employee.getRole()).toBe('Intern')
    });
});
