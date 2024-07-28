using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.FileProviders;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
WebApplication app = builder.Build();

if (app.Configuration["wwwroot"] is string wwwroot)
{
	StaticFileOptions staticFileOptions = new()
	{
		FileProvider = new PhysicalFileProvider(wwwroot),
		ContentTypeProvider = new FileExtensionContentTypeProvider()
	};

	app.UseSpaStaticFiles(staticFileOptions);
	app.UseSpa(s => s.Options.DefaultPageStaticFileOptions = staticFileOptions);
}

await app.RunAsync();
