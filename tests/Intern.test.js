const Intern = require('../lib/Intern');
const intern = new Intern ('lydia','123', 'lydia@gmail.com', 'Ohio University')

describe('intern', () => {
    it('should return an object from constructor', () => {
      expect(intern.name).toBe('lydia');
      expect(intern.id).toBe('123');
      expect(intern.email).toBe('lydia@gmail.com');
      expect(intern.school).toBe('Ohio University');
    });
});

describe('getName()', () => {
    it('should get the name from this method', () => {
      expect(intern.getName()).toBe('lydia')
    });
});

describe('getId()', () => {
    it('should get the id from this method', () => {
      expect(intern.getId()).toBe('123')
    });
});

describe('getEmail()', () => {
    it('should get the email from this method', () => {
      expect(intern.getEmail()).toBe('lydia@gmail.com')
    });
});

describe('getSchool()', () => {
    it('should get the school name from this method', () => {
      expect(intern.getSchool()).toBe('Ohio University')
    });
});

describe('getRole()', () => {
    it('should get the role from this method', () => {
      expect(intern.getRole()).toBe('Intern')
    });
});
