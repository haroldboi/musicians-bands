const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Musician', async () => {
        const mus =  await Musician.create({
            name:"Pete Man",
            instrument: "Drums"
        })
        const mus2 =  await Musician.create({
            name:"Harry Boi",
            instrument: "Singer"
        })
        const mus3=  await Musician.create({
            name:"Seth Yute",
            instrument: "Bass"
        })
        expect(mus.name).toBe("Pete Man");
        expect(mus.instrument).toBe("Drums");
    })

    test('can create a Band', async () => {
        const band1 = await Band.create({
             name:"Billy Talent",
             genre: "Punk Rock"
         })
         
         expect(band1.name).toBe("Billy Talent");
         expect(band1.genre).toBe("Punk Rock");
     })

    test('Can Assign Musician to a band', async () => {
        const band1 = await Band.findOne({where:{name: "Billy Talent"}})
        const musc = await Musician.findAll({})
        await musc.forEach((x) => { band1.addMusician(x)})
        const musc1 = await Musician.findAll({})
        for(each of musc1){
            expect(each.BandId).toEqual(band1.id)
        }
    })
})