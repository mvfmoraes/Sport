const addresses = require('../api/controller/addresses');
const affiliations = require('../api/controller/affiliations');
const affiliationsDocuments = require('../api/controller/affiliationsDocuments');
const affiliationsEvents = require('../api/controller/affiliationsEvents');
const affiliationsMedia = require('../api/controller/affiliationsMedia');
const affiliationPhases = require('../api/controller/affiliationPhases');
const americanFootballActionParticipants = require('../api/controller/americanFootballActionParticipants');
const americanFootballActionPlays = require('../api/controller/americanFootballActionPlays');
const americanFootballDefensiveStats = require('../api/controller/americanFootballDefensiveStats');
const americanFootballDownProgressStats = require('../api/controller/americanFootballDownProgressStats');
const americanFootballEventStates = require('../api/controller/americanFootballEventStates');
const americanFootballFumblesStats = require('../api/controller/americanFootballFumblesStats');
const americanFootballOffensiveStats = require('../api/controller/americanFootballOffensiveStats');
const americanFootballPassingStats = require('../api/controller/americanFootballPassingStats');
const americanFootballPenaltiesStats = require('../api/controller/americanFootballPenaltiesStats');
const americanFootballRushingStats = require('../api/controller/americanFootballRushingStats');
const americanFootballSacksAgainstStats = require('../api/controller/americanFootballSacksAgainstStats');
const americanFootballScoringStats = require('../api/controller/americanFootballScoringStats');
const americanFootballSpecialTeamsStats = require('../api/controller/americanFootballSpecialTeamsStats');
const baseballActionContactDetails = require('../api/controller/baseballActionContactDetails');
const baseballActionPitches = require('../api/controller/baseballActionPitches');
const baseballActionPlays = require('../api/controller/baseballActionPlays');
const baseballActionSubstitutions = require('../api/controller/baseballActionSubstitutions');
const baseballDefensiveGroup = require('../api/controller/baseballDefensiveGroup');
const baseballDefensivePlayers = require('../api/controller/baseballDefensivePlayers');
const baseballDefensiveStats = require('../api/controller/baseballDefensiveStats');
const baseballEventStates = require('../api/controller/baseballEventStates');
const baseballOffensiveStats = require('../api/controller/baseballOffensiveStats');
const baseballPitchingStats = require('../api/controller/baseballPitchingStats');
const basketballDefensiveStats = require('../api/controller/basketballDefensiveStats');
const basketballEventStates = require('../api/controller/basketballEventStates');
const basketballOffensiveStats = require('../api/controller/basketballOffensiveStats');
const basketballReboundingStats = require('../api/controller/basketballReboundingStats');
const basketballTeamStats = require('../api/controller/basketballTeamStats');
const bookmakers = require('../api/controller/bookmakers');
const corePersonStats = require('../api/controller/corePersonStats');
const coreStats = require('../api/controller/coreStats');
const dbInfo = require('../api/controller/dbInfo');
const displayNames = require('../api/controller/displayNames');
const documents = require('../api/controller/documents');
const documentsMedia = require('../api/controller/documentsMedia');
const documentClasses = require('../api/controller/documentClasses');
const documentContents = require('../api/controller/documentContents');
const documentFixtures = require('../api/controller/documentFixtures');
const documentFixturesEvents = require('../api/controller/documentFixturesEvents');
const documentPackages = require('../api/controller/documentPackages');
const documentPackageEntry = require('../api/controller/documentPackageEntry');
const events = require('../api/controller/events');
const eventsDocuments = require('../api/controller/eventsDocuments');
const eventsMedia = require('../api/controller/eventsMedia');
const eventsSubSeasons = require('../api/controller/eventsSubSeasons');

module.exports = app => {

    app.route('/addresses').get(addresses.getAll);
    app.route('/addresses/:id').get(addresses.get);
    app.route('/addresses').post(addresses.put);

    app.route('/affiliations').get(affiliations.getAll);
    app.route('/affiliations/:id').get(affiliations.get);
    app.route('/affiliations').post(affiliations.put);

    app.route('/affiliationsDocuments').get(affiliationsDocuments.getAll);
    app.route('/affiliationsDocuments/:affiliation_id').get(affiliationsDocuments.get);

    app.route('/affiliationsEvents').get(affiliationsEvents.getAll);
    app.route('/affiliationsEvents/:affiliation_id').get(affiliationsEvents.get);

    app.route('/affiliationsMedia').get(affiliationsMedia.getAll);
    app.route('/affiliationsMedia/:affiliation_id').get(affiliationsMedia.get);

    app.route('/affiliationPhases').get(affiliationPhases.getAll);
    app.route('/affiliationPhases/:id').get(affiliationPhases.get);

    app.route('/americanFootballActionParticipants').get(americanFootballActionParticipants.getAll);
    app.route('/americanFootballActionParticipants/:id').get(americanFootballActionParticipants.get);
    app.route('/americanFootballActionParticipants').post(americanFootballActionParticipants.put);

    app.route('/americanFootballActionPlays').get(americanFootballActionPlays.getAll);
    app.route('/americanFootballActionPlays/:id').get(americanFootballActionPlays.get);
    app.route('/americanFootballActionPlays').post(americanFootballActionPlays.put);

    app.route('/americanFootballDefensiveStats').get(americanFootballDefensiveStats.getAll);
    app.route('/americanFootballDefensiveStats/:id').get(americanFootballDefensiveStats.get);

    app.route('/americanFootballDownProgressStats').get(americanFootballDownProgressStats.getAll);
    app.route('/americanFootballDownProgressStats/:id').get(americanFootballDownProgressStats.get);

    app.route('/americanFootballEventStates').get(americanFootballEventStates.getAll);
    app.route('/americanFootballEventStates/:id').get(americanFootballEventStates.get);

    app.route('/americanFootballFumblesStats').get(americanFootballFumblesStats.getAll);
    app.route('/americanFootballFumblesStats/:id').get(americanFootballFumblesStats.get);

    app.route('/americanFootballOffensiveStats').get(americanFootballOffensiveStats.getAll);
    app.route('/americanFootballOffensiveStats/:id').get(americanFootballOffensiveStats.get);

    app.route('/americanFootballPassingStats').get(americanFootballPassingStats.getAll);
    app.route('/americanFootballPassingStats/:id').get(americanFootballPassingStats.get);

    app.route('/americanFootballPenaltiesStats').get(americanFootballPenaltiesStats.getAll);
    app.route('/americanFootballPenaltiesStats/:id').get(americanFootballPenaltiesStats.get);

    app.route('/americanFootballRushingStats').get(americanFootballRushingStats.getAll);
    app.route('/americanFootballRushingStats/:id').get(americanFootballRushingStats.get);

    app.route('/americanFootballSacksAgainstStats').get(americanFootballSacksAgainstStats.getAll);
    app.route('/americanFootballSacksAgainstStats/:id').get(americanFootballSacksAgainstStats.get);

    app.route('/americanFootballScoringStats').get(americanFootballScoringStats.getAll);
    app.route('/americanFootballScoringStats/:id').get(americanFootballScoringStats.get);

    app.route('/americanFootballSpecialTeamsStats').get(americanFootballSpecialTeamsStats.getAll);
    app.route('/americanFootballSpecialTeamsStats/:id').get(americanFootballSpecialTeamsStats.get);

    app.route('/baseballActionContactDetails').get(baseballActionContactDetails.getAll);
    app.route('/baseballActionContactDetails/:id').get(baseballActionContactDetails.get);
    app.route('/baseballActionContactDetails').post(baseballActionContactDetails.put);

    app.route('/baseballActionPitches').get(baseballActionPitches.getAll);
    app.route('/baseballActionPitches/:id').get(baseballActionPitches.get);
    app.route('/baseballActionPitches').post(baseballActionPitches.put);

    app.route('/baseballActionPlays').get(baseballActionPlays.getAll);
    app.route('/baseballActionPlays/:id').get(baseballActionPlays.get);
    app.route('/baseballActionPlays').post(baseballActionPlays.put);

    app.route('/baseballActionSubstitutions').get(baseballActionSubstitutions.getAll);
    app.route('/baseballActionSubstitutions/:id').get(baseballActionSubstitutions.get);
    app.route('/baseballActionSubstitutions').post(baseballActionSubstitutions.put);

    app.route('/baseballDefensiveGroup').get(baseballDefensiveGroup.getAll);
    app.route('/baseballDefensiveGroup/:id').get(baseballDefensiveGroup.get);

    app.route('/baseballDefensivePlayers').get(baseballDefensivePlayers.getAll);
    app.route('/baseballDefensivePlayers/:id').get(baseballDefensivePlayers.get);

    app.route('/baseballDefensiveStats').get(baseballDefensiveStats.getAll);
    app.route('/baseballDefensiveStats/:id').get(baseballDefensiveStats.get);

    app.route('/baseballEventStates').get(baseballEventStates.getAll);
    app.route('/baseballEventStates/:id').get(baseballEventStates.get);

    app.route('/baseballOffensiveStats').get(baseballOffensiveStats.getAll);
    app.route('/baseballOffensiveStats/:id').get(baseballOffensiveStats.get);

    app.route('/baseballPitchingStats').get(baseballPitchingStats.getAll);
    app.route('/baseballPitchingStats/:id').get(baseballPitchingStats.get);

    app.route('/basketballDefensiveStats').get(basketballDefensiveStats.getAll);
    app.route('/basketballDefensiveStats/:id').get(basketballDefensiveStats.get);
    app.route('/basketballDefensiveStats').post(basketballDefensiveStats.put);

    app.route('/basketballEventStates').get(basketballEventStates.getAll);
    app.route('/basketballEventStates/:id').get(basketballEventStates.get);
    app.route('/basketballEventStates').post(basketballEventStates.put);

    app.route('/basketballOffensiveStats').get(basketballOffensiveStats.getAll);
    app.route('/basketballOffensiveStats/:id').get(basketballOffensiveStats.get);
    app.route('/basketballOffensiveStats').post(basketballOffensiveStats.put);

    app.route('/basketballReboundingStats').get(basketballReboundingStats.getAll);
    app.route('/basketballReboundingStats/:id').get(basketballReboundingStats.get);
    app.route('/basketballReboundingStats').post(basketballReboundingStats.put);

    app.route('/basketballTeamStats').get(basketballTeamStats.getAll);
    app.route('/basketballTeamStats/:id').get(basketballTeamStats.get);
    app.route('/basketballTeamStats').post(basketballTeamStats.put);

    app.route('/bookmakers').get(bookmakers.getAll);
    app.route('/bookmakers/:id').get(bookmakers.get);
    app.route('/bookmakers').post(bookmakers.put);

    app.route('/corePersonStats').get(corePersonStats.getAll);
    app.route('/corePersonStats/:id').get(corePersonStats.get);
    app.route('/corePersonStats').post(corePersonStats.put);

    app.route('/coreStats').get(coreStats.getAll);
    app.route('/coreStats/:id').get(coreStats.get);
    app.route('/coreStats').post(coreStats.put);

    app.route('/dbInfo').get(dbInfo.getAll);
    app.route('/dbInfo/:id').get(dbInfo.get);

    app.route('/displayNames').get(displayNames.getAll);
    app.route('/displayNames/:id').get(displayNames.get);
    app.route('/displayNames').post(displayNames.put);

    app.route('/documents').get(documents.getAll);
    app.route('/documents/:id').get(documents.get);
    app.route('/documents').post(documents.put);

    app.route('/documentsMedia').get(documentsMedia.getAll);
    app.route('/documentsMedia/:id').get(documentsMedia.get);

    app.route('/documentClasses').get(documentClasses.getAll);
    app.route('/documentClasses/:id').get(documentClasses.get);

    app.route('/documentContents').get(documentContents.getAll);
    app.route('/documentContents/:id').get(documentContents.get);

    app.route('/documentFixtures').get(documentFixtures.getAll);
    app.route('/documentFixtures/:id').get(documentFixtures.get);

    app.route('/documentFixturesEvents').get(documentFixturesEvents.getAll);
    app.route('/documentFixturesEvents/:id').get(documentFixturesEvents.get);

    app.route('/documentPackages').get(documentPackages.getAll);
    app.route('/documentPackages/:id').get(documentPackages.get);
    app.route('/documentPackages').post(documentPackages.put);

    app.route('/documentPackageEntry').get(documentPackageEntry.getAll);
    app.route('/documentPackageEntry/:id').get(documentPackageEntry.get);
    app.route('/documentPackageEntry').post(documentPackageEntry.put);

    app.route('/events').get(events.getAll);
    app.route('/events/:id').get(events.get);
    app.route('/events').post(events.put);

    app.route('/eventsDocuments').get(eventsDocuments.getAll);
    app.route('/eventsDocuments/:event_id').get(eventsDocuments.get);

    app.route('/eventsMedia').get(eventsMedia.getAll);
    app.route('/eventsMedia/:event_id').get(eventsMedia.get);
    
    app.route('/eventsSubSeasons').get(eventsSubSeasons.getAll);
    app.route('/eventsSubSeasons/:event_id').get(eventsSubSeasons.get);

}
