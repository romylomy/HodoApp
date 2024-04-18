import { type bikeRoute, db } from '.'
import * as dotenv from 'dotenv'


dotenv.config()

const seed = async () => {
  const products: bikeRoute[] = [
    {
        id: 'jasper-moderate-1',
        imageId: '/jasper1.png',
        name: 'Policeman CreekBoard Walk Trail ',
        nationalpark: 'jasper',
        description: 'Enjoy this 4.0-km out-and-back trail. Generally considered an easy route, it takes an average of 58 min to complete. This is a very popular area for birding, road biking, and snowshoeing, so you will likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.',
        distance: 4.0,
        difficulty: 'moderate',
        trailtype: 'single'
    },
    {
        id: 'banff-easy-1',
        imageId: '/banffeasy1.png',
        name: 'Bow Valley Park Way',
        nationalpark: 'banff',
        description: 'Experience this 35.2-km out-and-back trail near Banff, Alberta. Generally considered a moderately challenging route. This is a very popular area for camping, road biking, and scenic driving, so you will likely encounter other people while exploring. The best times to visit this trail are May through October. Dogs are welcome, but must be on a leash.',
        distance: 35.2,
        difficulty: 'easy',
        trailtype: 'double'
    },
    {
        id: 'banff-moderate-1',
        imageId: '/banffmoderate1.png',
        name: 'Banff Legacy Trail',
        nationalpark: 'jasper',
        description: 'Get to know this 20.3-km point-to-point trail near Canmore, Alberta. Generally considered a moderately challenging route, it takes an average of 4 h 46 min to complete. This is a very popular area for mountain biking, road biking, and running, so you will likely encounter other people while exploring. The best times to visit this trail are April through November. Dogs are welcome, but must be on a leash.',
        distance: 20.3,
        difficulty: 'moderate',
        trailtype: 'single'
    },
    {
        id: 'waterton-hard-1',
        imageId: '/watertondifficult1.png',
        name: 'Akamina Pass Trail',
        nationalpark: 'jasper',
        description: 'This short, steep trail climbs from the Akamina Parkway to the Alberta-British Columbia boundary then continues into Akamina-Kishinena Provincial Park in B.C.',
        distance: 20.3,
        difficulty: 'hard',
        trailtype: 'downhill'
    }

  ]

  

  const DIFFICULTY_MAP = {
    easy: 0,
    moderate: 1,
    hard: 2,
  }

  const NATIONAPARK_MAP = {
    banff: 0,
    jasper: 1,
    waterton: 2,
  }

  const TRAILTYPE_MAP = {
    single: 0,
    double: 1,
    downhill:2

  }

  await db.upsert(
    products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      vector: [ NATIONAPARK_MAP[product.nationalpark],DIFFICULTY_MAP[product.difficulty],TRAILTYPE_MAP[product.trailtype], product.distance],
      metadata: product,
    }))
  )
}

seed()