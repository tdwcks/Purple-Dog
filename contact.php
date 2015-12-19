<?php include("includes/global/header.php"); ?>

	<section class="pattern-header">

		<div class="grid-container">

			<div class="row">

				<h2 class="underline">Contact</h2>

			</div>

		</div>

	</section>

	<section class="pattern-description">

		<div class="grid-container">

			<div class="row">

				<div class="col-10">

					<h4 class="underline">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>

				</div>

			</div>

		</div>

	</section>

	<section class="contact-details">

		<div class="grid-container">

			<div class="row">

				<div class="col-4">

					<h5>Email Us</h5>

					<p>info@purpledog-training.co.uk</p>

					<h5>Call us</h5>

					<p>01484 546780</p>

				</div>

				<div class="col-4">

					<h5>Address</h5>

					<p>Office 13, Ingfield Enterprise Centre, </br> Cherry Nook Road, Deighton, Huddersfield, </br> HD2 1JD</p>

				</div>

				<div class="col-4">

					<h5>Social Media</h5>

					<p><a>Facebook</a></br><a>Twitter</a></br><a>Linkedin</a></p>

				</div>

			</div>

			<div class="row">

				<div id="map"></div>

			</div>

		</div>

	</section>

	<script>

        L.mapbox.accessToken = 'pk.eyJ1IjoidGR3Y2tzIiwiYSI6IlhwMGlGR28ifQ.irq5Rbn1WvGb_VIwn1auNA';
        var map = L.mapbox.map('map', 'mapbox.light')
        .setView([53.669557, -1.755114], 16);

        var myLayer = L.mapbox.featureLayer().addTo(map);

        var geoJson = [{

            type: 'Feature',
            "geometry": { "type": "Point", "coordinates": [-1.755114,53.669557]},
            "properties": {
                "icon": {
                    "iconUrl": "img/map_icon.svg",
                    "iconSize": [100, 100], // size of the icon
                    "iconAnchor": [35, 85], // point of the icon which will correspond to marker's location
                }
            } 

        }, {
            // Add Another Point
        }];

        // Add custom popups to each using our custom feature properties
        myLayer.on('layeradd', function(e) {
            var marker = e.layer,
                feature = marker.feature;


        });

        // Set a custom icon on each marker based on feature properties.
        myLayer.on('layeradd', function(e) {
            var marker = e.layer,
                feature = marker.feature;

            marker.setIcon(L.icon(feature.properties.icon));
        });


        // Add features to the map
        myLayer.setGeoJSON(geoJson);



       </script>

<?php include("includes/global/footer.php"); ?>
