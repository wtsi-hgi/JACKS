FROM python:3.6

COPY reference_grna_efficacies /app/reference_grna_efficacies
COPY jacks                     /app/jacks
COPY server                    /app/server

RUN pip install --upgrade pip setuptools wheel \
 && pip install /app/jacks \
                -r /app/server/requirements.txt

EXPOSE 5000

ENV PYTHONPATH="/app:/app/server:/app/jacks"
WORKDIR /app
CMD python server/app.py
