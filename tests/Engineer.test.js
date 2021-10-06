const Engineer = require('../lib/Engineer');
const engineer = new Engineer ('lydia','123', 'lydia@gmail.com', 'lydiawdesign');

describe('engineer', () => {
    it('should return an object from constructor', () => {
      expect(engineer.name).toBe("lydia");
      expect(engineer.id).toBe("123");
      expect(engineer.email).toBe("lydia@gmail.com");
      expect(engineer.github).toBe("lydiawdesign");
    });
});

describe('getName()', () => {
    it('should get the name from this method', () => {
      expect(engineer.getName()).toBe('lydia')
    });
});

describe('getId()', () => {
    it('should get the id from this method', () => {
      expect(engineer.getId()).toBe('123')
    });
});

describe('getEmail()', () => {
    it('should get the office phone number from this method', () => {
      expect(engineer.getEmail()).toBe('lydia@gmail.com')
    });
});

describe('getGithub()', () => {
    it('should get the gitHub username from this method', () => {
      expect(engineer.getGithub()).toBe('lydiawdesign')
    });
});

describe('getRole()', () => {
    it('should get the role from this method', () => {
      expect(engineer.getRole()).toBe('Engineer')
    });
});
