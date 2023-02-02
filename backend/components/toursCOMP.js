let tours;

export default class toursCOMP {

  static async injectDB(connector) {
    if (tours) return;
    try {
      tours = await connector.db(process.env.DATABASE_NAME).collection("tours");

    } catch (e) {
      console.error(`Unable to establish a collection handle in toursCOMP: ${e}`);
    }
  }

  static async getTours({filters = null, page = 0, toursPerPage = 20} = {}) {
    let query;
    if (filters) {
      //configure filter sort here
    }
    
    let cursor;
    try {
      cursor = await tours.find(query);

    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return {tourList: [], totalNumTours: 0}
    }

    const displayCursor = cursor.limit(toursPerPage).skip(toursPerPage * page);
    try {
      const tourList = await displayCursor.toArray();
      const totalNumTours = await tours.countDocuments();
      return { tourList, totalNumTours }

    } catch (e) {
      console.error(`Unable to convert cursor to array or problem counting documents, ${e}`);
      return {tourList: [], totalNumTours: 0}
    }
  }
  
}