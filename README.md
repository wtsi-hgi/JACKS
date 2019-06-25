In the subdirectories here you will find:

## jacks:  

The JACKS python package (please see jacks/README.txt for usage instructions)


## 2018_paper_materials: 

Scripts and README files with location of results and data for the JACKS 2018 paper.

## reference_grna_efficacies:

Trained values for JACKS's gRNA efficacies for the Avana, GeCKOv2, Yusa 1.0, TKOv1 and Whiteahead
libraries as generated for the 2018 JACKS paper. These can be used with 
run_JACKS.py to evaluate screens on these libraries without re-running
the full analysis.


cd /Users/gn5/Documents/Flask
# create env # python3 -m venv venv
. venv/bin/activate 
# pip install -r ./server/requirements.txt
# main.py or main2.py in Flask/server 
export FLASK_APP=main2.py
export FLASK_ENV=development
export PYTHONPATH=/Users/gn5/Documents/Flask:/Users/gn5/Documents/Flask/server:/Users/gn5/Documents/Flask/jacks

# in other shell 
redis-server
# in other shell # level DEBUG or info
celery -A main2.celery worker --loglevel=DEBUG -E
# in other shell
celery -A main2.celery flower --loglevel=DEBUG -E
# in other shell
python server/main2.py


# flask run, doesn't work with socketIO
http://127.0.0.1:5000/
http://127.0.0.1:5555/