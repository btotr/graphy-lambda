# Simple service to convert rdf serialization trig to xml

##install
using serverless: 
"""sls deploy """"


## example

"""
'<eample2020-11-16T11:38:37.470Z> a <https://flow.recipes/ns/core#Recipe>, <http://www.w3.org/2002/07/owl#NamedIndividual>;' | curl -X POST --data @- https://x8nbg8tb0m.execute-api.eu-west-1.amazonaws.com/dev/trig2xml
"""
