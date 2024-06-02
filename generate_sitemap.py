import json
import xml.etree.ElementTree as ET
from xml.dom import minidom
from datetime import datetime

# Open modules.json
with open('json/modules.json') as json_data:
    data = json.load(json_data)

# Access the "modules" object
modules = data.get("modules", [])

# Create the root element for the sitemap
urlset = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

# Base URL for the modules
base_url = "http://mmrl.dergoogler.com/?module="

# Add URLs to the sitemap
for module in modules:

    # Convert Unix timestamp to datetime object
    dt_object = datetime.utcfromtimestamp(module["timestamp"])

    # Format the datetime object as 'YYYY-MM-DD'
    formatted_date = dt_object.strftime('%Y-%m-%d')

    module_id = module["id"]
    url = base_url + module_id
    url_element = ET.SubElement(urlset, "url")
    loc_element = ET.SubElement(url_element, "loc")
    lastmod_element = ET.SubElement(url_element, "lastmod")
    lastmod_element.text = formatted_date
    loc_element.text = url

# Convert the ElementTree to a string
sitemap = ET.tostring(urlset, encoding="utf-8", method="xml")

xmlstr = minidom.parseString(sitemap).toprettyxml(indent="   ")

# Write to a file
with open("json/sitemap.xml", "w") as f:
    f.write(xmlstr)

print("Sitemap generated successfully.")
