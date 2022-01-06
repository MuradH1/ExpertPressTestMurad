import json
  
dictionary ={
    "Name" : "John Doe",
    "Age" : 35,
    "City" : "Collingwood"
}
  
json_file = json.dumps(dictionary, indent = 3)

with open("myfile.json", "w") as outfile:
    outfile.write(json_file)
