import { Voiture } from "./exercice";

describe("Exercice TypeScript - Voiture", () => {
    it("La classe Voiture doit être définie", () => {
        expect(Voiture).toBeDefined();
    });

    it("La classe Voiture doit initialiser les propriétés correctement", () => {
        const voiture = new Voiture("Toyota", 50000);
        expect(voiture.marque).toBe("Toyota");
        expect(voiture.kilometrage).toBe(50000);
    });

    it("La méthode afficherDetails doit afficher les bonnes informations", () => {
        const consoleSpy = jest.spyOn(console, "log");
        const voiture = new Voiture("Toyota", 50000);
        voiture.afficherDetails();
        expect(consoleSpy).toHaveBeenCalledWith(
            "Marque: Toyota - Kilométrage: 50000 km"
        );
        consoleSpy.mockRestore();
    });
});
