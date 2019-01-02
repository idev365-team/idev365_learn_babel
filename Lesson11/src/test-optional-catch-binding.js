try {
    throw 0;
  } catch {
    doSomethingWhichDoesntCareAboutTheValueThrown();
  }