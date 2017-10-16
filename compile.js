function autodock_compile()
{
  console.log("Called");
  var base = document.querySelector("#base").value;
  var maintainer = document.querySelector("#maintainer").value;
  var ports = document.querySelector("#ports").value;
  var commands = document.querySelector("#commands").value;
  var env = document.querySelector("#env").value;
  var workdir = document.querySelector("#workdir").value;
  var entry = document.querySelector("#entry").value;
  var params = document.querySelector("#params").value;
  var output = document.querySelector("#output");

  addBase(base,output);
  addMaintainer(maintainer,output);
  addPorts(ports,output);
  addCommands(commands,output);
  addEnv(env,output);
  addWorkdir(workdir,output);
  addEntry(entry,output);
  addParams(params,output);
}

function addBase(value,output)
{
  output.value += "FROM "+value+"\n";
}

function addMaintainer(value,output)
{
  output.value += "LABEL maintainer=\""+value+"\"\n";
}

function addPorts(value,output)
{
  output.value += "EXPOSE "+value+"\n";
}

function addCommands(value,output)
{
  output.value += "RUN "+value+"\n";
}

function addEnv(value,output)
{
  output.value += "ENV "+value+"\n";
}

function addWorkdir(value,output)
{
  output.value += "WORKDIR "+value+"\n";
}

function addEntry(value,output)
{
  output.value += "ENTRYPOINT [\""+value+"\"]\n";
}

function addParams(value,output)
{
  output.value += "CMD [\""+value+"\"]\n";
}
