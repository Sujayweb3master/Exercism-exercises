public class Lasagna {

    public int expectedMinutesInOven() {
        return 40;
    }

    public int remainingMinutesInOven(int x) {
        return expectedMinutesInOven() - x;
    }

    public int preparationTimeInMinutes(int l) {
        return 2 * l;
    }
    
    public int totalTimeInMinutes(int l, int x) {
        return preparationTimeInMinutes(l) + x; 
    }
}
