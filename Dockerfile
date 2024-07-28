# stage to publish the ASP.NET Core backend
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS backend
WORKDIR /src/backend/
COPY Backend/ .
RUN dotnet publish Backend.csproj -c Release -o /app/backend /p:UseAppHost=false

# stage to build the Svelte frontend
FROM node:21 AS frontend
WORKDIR /app/frontend/
COPY Frontend/package*.json .
RUN npm install
COPY Frontend/ .
RUN npm run build

# putting it all together
FROM mcr.microsoft.com/dotnet/aspnet:8.0-jammy AS final
WORKDIR /app
COPY --from=backend /app/backend/ .
COPY --from=frontend /app/frontend/build/ client/
EXPOSE 80
ENTRYPOINT ["dotnet", "Backend.dll", "wwwroot=/app/client", "urls=http://+:80"]