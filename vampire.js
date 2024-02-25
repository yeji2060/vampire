class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
  return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let vampCount = 0;
    let currentVamp = this;
    while (currentVamp.creator) {
      vampCount++;
      currentVamp = currentVamp.creator;
      
    }

    return vampCount;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.creator === null) {
      return true;
    }
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let currentAncestor = this;
    while (!vampire.isDescendantOf(currentAncestor)) {
      if(currentAncestor.creator === null) {
        return currentAncestor;
      }
      currentAncestor = currentAncestor.creator;
    }
    return currentAncestor;
  }

  isDescendantOf(vampire) {
    let currentVampire = this;
    while(currentVampire) {
      if(currentVampire === vampire) {
        return true;
      }
      currentVampire = currentVampire.creator;
    }
    return false;
  }
}

module.exports = Vampire;

