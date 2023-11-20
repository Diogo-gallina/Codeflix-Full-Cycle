import { Category } from "../category.entity";

describe('Category Entity Unit Tests', () => {

    it('constructor', ()=> {
        const category = new Category({
            name: 'Movie',
            description: 'test',
            is_active: true,
            created_at: new Date()
        });
        expect(category.category_id).toBeUndefined();
        expect(category.name).toBe('Movie');
        expect(category.description).toBe('test');
        expect(category.is_active).toBeTruthy();
        expect(category.created_at).toBeInstanceOf(Date);
    })

});