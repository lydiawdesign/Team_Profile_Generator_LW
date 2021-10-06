const Manager = require('../lib/Manager');
const manager = new Manager('lydia','123', 'lydia@gmail.com', '5137777777')

describe('manager', () => {
    it('should return an object from constructor', () => {
      expect(manager.name).toBe("lydia");
      expect(manager.id).toBe("123");
      expect(manager.email).toBe("lydia@gmail.com");
      expect(manager.officeNumber).toBe("5137777777");
    });
});

describe('getName()', () => {
    it('should get the name from this method', () => {
      expect(manager.getName()).toBe('lydia')
    });
});

describe('getId()', () => {
    it('should get the id from this method', () => {
      expect(manager.getId()).toBe('123')
    });
});

describe('getEmail()', () => {
    it('should get the email from this method', () => {
      expect(manager.getEmail()).toBe('lydia@gmail.com')
    });
});

describe('getOfficeNumber()', () => {
    it('should get the office phone number from this method', () => {
      expect(manager.getOfficeNumber()).toBe('5137777777')
    });
});

describe('getRole()', () => {
    it('should get the role from this method', () => {
      expect(manager.getRole()).toBe('Manager')
    });
});