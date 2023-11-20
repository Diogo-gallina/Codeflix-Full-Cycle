import { Category } from "../category.entity";

describe("Category Entity Unit Tests", () => {

  describe("Constructor tests", () => {

    it("Instance category someone with name", () => {
      const category = new Category({
        name: "Movie",
      });
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    it("Instance category with all data", () => {
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

    it("Instance category with name and description", () => {
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
});
