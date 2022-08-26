GBIF occurrences heatmap on a 3d globe.

Install some stuff:
```shell
conda install -c conda-forge nodejs
npm install react-scripts --save
```

Test locally:
```shell
npm run start
```

Check that `PUBLIC_URL` is correct in [.env](https://github.com/MathewBiddle/gbif_globe/blob/master/.env)

To update web version:
* Commit changes to repo
* Deploy page by running this locally:
   ```shell
   npm run deploy
   ```
* That will kickoff  [GH-Action](https://github.com/MathewBiddle/gbif_globe/actions) to rebuild the webpage.

 
# To create the jpg images for the globe
All images that are displayed on the map are found at https://github.com/MathewBiddle/gbif_globe/tree/master/images

The Jupyter notebook [Create_species_map_from_OBIS_API.ipynb](https://github.com/MathewBiddle/gbif_globe/blob/master/Create_species_map_from_OBIS_API.ipynb) is used to create the images.

# Things to note:
* projection is [Platte Carree](https://pro.arcgis.com/en/pro-app/2.8/help/mapping/properties/plate-carree.htm) with a central longitude at 0.0.
* figure size is width=160, height=80 in inches.
* NavIcons come from https://react-icons.github.io/react-icons

# To edit globe settings
See <https://react-globe.netlify.app/>