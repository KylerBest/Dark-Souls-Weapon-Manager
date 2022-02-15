# Dark Souls Weapon Manager

This app is a tool for all of the weapons from the game Dark Souls.
It allows you to search through these weapons by name or type.
Each weapon has it's own "card" which can take you to the weapon's
corresponding "details" page or it's Wiki page (<https://darksouls.wiki.fextralife.com/Dark+Souls+Wiki>).
You can set these cards as favorites to make it easier to keep track of specific weapons.

## APIs

This app uses two APIs. The first is <https://jgalat.github.io/ds-weapons-api/> (credit to <https://github.com/jgalat>)
which is used to pull all of the data for all of the weapons.
JSON-server is also used to store and retrieve all of your "favorited" weapons.
My db.json file has already been deployed to <https://still-escarpment-16824.herokuapp.com/favoriteWeapons>,
and the app itself has also been deployed to <https://infallible-ptolemy-db5123.netlify.app/> where you
should be able to try it out.
