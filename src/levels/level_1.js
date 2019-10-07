import Level from "../level";
import SkeletonGrunt from "../skeleton_grunt";

export default class LevelOne extends Level {

  constructor(context) {
    super(context);
    this.structures = [
      [
        {x: 0, y: 490},
        {x: 200, y: 500}
      ],
      [
        {x: 800, y: 490},
        {x: 1000, y: 500}
      ]
    ];

    this.spawnInfo = [
      {
        location: {x: 10, y: 400},
        Enemy: SkeletonGrunt,
        flipped: false,
        spawnTime: 2000
      },
      {
        location: {x: 10, y: 510},
        Enemy: SkeletonGrunt,
        flipped: false,
        spawnTime: 2000
      },
      {
        location: {x: 990, y: 400},
        Enemy: SkeletonGrunt,
        flipped: true,
        spawnTime: 2000
      },
      {
        location: {x: 990, y: 510},
        Enemy: SkeletonGrunt,
        flipped: true,
        spawnTime: 2000
      }
    ]
  }

}