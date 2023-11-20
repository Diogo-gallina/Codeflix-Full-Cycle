import { Category } from "../category.entity";

describe("Category Entity Unit Tests", () => {

  describe("Constructor tests", () => {

    it("instance category someone with name", () => {
      const category = new Category({
        name: "Movie",
      });
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    it("instance category with all data", () => {
      const category = new Category({
        name: "Movie",
        description: "Movie description",
        is_active: false,
        created_at: new Date(),
      });
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBe("Movie description");
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    it("instance category with name and description", () => {
      const category = new Category({
        name: "Movie",
        description: "Movie description",
      });
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBe("Movie description");
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

  });

  describe('Create tests' ,() => {
    it("should create a category with name", () => {
        const category = Category.create({
          name: "Movie",
        });
        expect(category.category_id).toBeUndefined();
        expect(category.name).toBe("Movie");
        expect(category.description).toBeNull();
        expect(category.is_active).toBeTruthy();
        expect(category.created_at).toBeInstanceOf(Date);
      });
  
      it("should create a category with all data", () => {
        const category = Category.create({
          name: "Movie",
          description: "Movie description",
          is_active: false,
        });
        expect(category.category_id).toBeUndefined();
        expect(category.name).toBe("Movie");
        expect(category.description).toBe("Movie description");
        expect(category.is_active).toBeFalsy();
        expect(category.created_at).toBeInstanceOf(Date);
      });
  
      it("should create a category with name and description", () => {
        const category = Category.create({
          name: "Movie",
          description: "Movie description",
        });
        expect(category.category_id).toBeUndefined();
        expect(category.name).toBe("Movie");
        expect(category.description).toBe("Movie description");
        expect(category.is_active).toBeTruthy();
        expect(category.created_at).toBeInstanceOf(Date);
      });
  });

  describe('Change Name tests',() => {
    it("should change the name of a category", () => {
      const category = Category.create({
        name: "Movie",
      });
      category.name = "Movie 2";
      expect(category.name).toBe("Movie 2");
    });
  });

  describe('Change Description tests',() => {});

  describe('Activate tests',() => {});

  describe('Deactivate tests',() => {});
});
